# Sheridan Richey Website - Git-Based Deployment Helper
# Safe, minimal PowerShell script for Vercel git deployments

param(
    [switch]$Commit,
    [switch]$Push,
    [switch]$Status,
    [switch]$Help
)

function ShowHelp {
    Write-Host "Sheridan Richey Website - Git Deployment Helper"
    Write-Host ""
    Write-Host "Usage:"
    Write-Host "  .\deploy.ps1 -Status     # Check git status and readiness"
    Write-Host "  .\deploy.ps1 -Commit     # Stage all changes"
    Write-Host "  .\deploy.ps1 -Push       # Push to main (triggers Vercel deploy)"
    Write-Host "  .\deploy.ps1 -Help       # Show this help"
    Write-Host ""
    Write-Host "Note: Vercel deploys automatically when you push to main."
}

function ShowStatus {
    Write-Host "Checking git status..."
    $status = git status --porcelain
    if ($status) {
        Write-Host "Changes detected:"
        $status | ForEach-Object { Write-Host "  $_" }
    } else {
        Write-Host "Working directory clean."
    }

    Write-Host ""
    Write-Host "Recent commits:"
    git log --oneline -5

    Write-Host ""
    Write-Host "Remote status:"
    git fetch origin 2>$null
    $localCommit = git rev-parse HEAD
    $remoteCommit = git rev-parse origin/main
    if ($localCommit -eq $remoteCommit) {
        Write-Host "Local main is up to date with origin/main."
    } else {
        Write-Host "Local main differs from origin/main."
        Write-Host ("  Local:  {0}" -f $localCommit.Substring(0,7))
        Write-Host ("  Remote: {0}" -f $remoteCommit.Substring(0,7))
    }

    Write-Host ""
    Write-Host "Next steps:"
    if ($status) {
        Write-Host "  1) Stage changes: .\deploy.ps1 -Commit"
        Write-Host "  2) Commit: git commit -m 'YOUR_MESSAGE'"
        Write-Host "  3) Push:   .\deploy.ps1 -Push"
    } else {
        Write-Host "  1) Make code changes"
        Write-Host "  2) Stage changes: .\deploy.ps1 -Commit"
        Write-Host "  3) Commit and Push"
    }
}

function StageChanges {
    Write-Host "Staging all changes..."
    git add .
    Write-Host ""
    Write-Host "Staged changes:"
    git status --porcelain
    Write-Host ""
    Write-Host "Now commit with: git commit -m 'feat: your message'"
}

function PushDeploy {
    Write-Host "Pushing to origin/main to trigger Vercel deploy..."
    git fetch origin 2>$null
    $localCommit = git rev-parse HEAD
    $remoteCommit = git rev-parse origin/main
    if ($localCommit -eq $remoteCommit) {
        Write-Host "No new commits to push. Commit your changes first."
        return
    }

    git push origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Push succeeded. Vercel deployment triggered."
        Write-Host "Monitor at: https://vercel.com/dashboard"
    } else {
        Write-Host "Push failed. Check git status and try again."
    }
}

# Entry point
if ($Help) { ShowHelp; exit 0 }

# Ensure we are in the website directory (contains package.json)
if (-not (Test-Path "package.json")) {
    Write-Host "Error: package.json not found. Run this from the 'website' directory."
    exit 1
}

try {
    $gitVersion = git --version
    Write-Host ("Git available: {0}" -f $gitVersion)
} catch {
    Write-Host "Error: Git is not available. Install Git first."
    exit 1
}

if ($Status) {
    ShowStatus
} elseif ($Commit) {
    StageChanges
} elseif ($Push) {
    PushDeploy
} else {
    ShowStatus
}