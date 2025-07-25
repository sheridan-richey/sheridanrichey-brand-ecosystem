# Deploy Script for Sheridan Richey Website
# Usage: .\deploy.ps1 "Your commit message here"

param(
    [Parameter(Mandatory=$true)]
    [string]$CommitMessage
)

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Please run this script from the website directory." -ForegroundColor Red
    exit 1
}

# Check if there are any changes to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "⚠️  No changes to commit. Everything is up to date." -ForegroundColor Yellow
    exit 0
}

Write-Host "📝 Changes detected:" -ForegroundColor Cyan
git status --short

# Add all changes
Write-Host "📦 Staging changes..." -ForegroundColor Cyan
git add .

# Commit changes
Write-Host "💾 Committing changes with message: '$CommitMessage'" -ForegroundColor Cyan
git commit -m $CommitMessage

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error: Failed to commit changes." -ForegroundColor Red
    exit 1
}

# Check current branch
$currentBranch = git branch --show-current
Write-Host "🌿 Current branch: $currentBranch" -ForegroundColor Cyan

# Push changes
Write-Host "📤 Pushing to remote repository..." -ForegroundColor Cyan
git push origin $currentBranch

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error: Failed to push changes." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Successfully deployed!" -ForegroundColor Green
Write-Host "🔗 Your changes should be live shortly on sheridanrichey.com" -ForegroundColor Green

# If we're on test-playwright-workflow branch, remind about main branch deployment
if ($currentBranch -eq "test-playwright-workflow") {
    Write-Host "ℹ️  Note: You're on the test-playwright-workflow branch." -ForegroundColor Yellow
    Write-Host "   To deploy to production, merge to main branch or configure Vercel to deploy from this branch." -ForegroundColor Yellow
} 