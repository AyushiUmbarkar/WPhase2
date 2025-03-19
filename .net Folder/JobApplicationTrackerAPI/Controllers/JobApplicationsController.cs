using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using JobApplicationTrackerAPI.Models;

[Route("api/jobapplications")]
[ApiController]
public class JobApplicationsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public JobApplicationsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // ✅ Get all job applications for the authenticated user
    [Authorize]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<JobApplication>>> GetJobs()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized("User not authenticated.");
        }

        int parsedUserId = int.Parse(userId);
        var jobs = await _context.JobApplications
                                .Where(j => j.UserId == parsedUserId)
                                .ToListAsync();

        return Ok(jobs);
    }

    // ✅ Get a specific job by ID (only if it belongs to the authenticated user)
    [Authorize]
    [HttpGet("{id}")]
    public async Task<ActionResult<JobApplication>> GetJobById(int id)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized("User not authenticated.");
        }

        var job = await _context.JobApplications.FindAsync(id);
        if (job == null)
        {
            return NotFound("Job not found.");
        }

        if (job.UserId != int.Parse(userId))
        {
            return Forbid("Access denied.");
        }

        return Ok(job);
    }

    // ✅ Add a new job (Ensure User ID is assigned)
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> AddJob([FromBody] JobApplication job)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized("User not authenticated.");
        }

        job.UserId = int.Parse(userId);  // ✅ Assign user ID from JWT
        _context.JobApplications.Add(job);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetJobById), new { id = job.Id }, job);
    }

    // ✅ Update job status (only if it belongs to the authenticated user)
    [Authorize]
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateJob(int id, [FromBody] JobApplication updatedJob)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized("User not authenticated.");
        }

        var job = await _context.JobApplications.FindAsync(id);
        if (job == null)
        {
            return NotFound("Job not found.");
        }

        if (job.UserId != int.Parse(userId))
        {
            return Forbid("Access denied.");
        }

        job.Status = updatedJob.Status;
        await _context.SaveChangesAsync();

        return Ok(job);
    }

    // ✅ Delete a job (only if it belongs to the authenticated user)
    [Authorize]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteJob(int id)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized("User not authenticated.");
        }

        var job = await _context.JobApplications.FindAsync(id);
        if (job == null)
        {
            return NotFound("Job not found.");
        }

        if (job.UserId != int.Parse(userId))
        {
            return Forbid("Access denied.");
        }

        _context.JobApplications.Remove(job);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Job deleted successfully." });
    }
}
