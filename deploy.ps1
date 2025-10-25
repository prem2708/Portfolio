# Railway deployment script for PowerShell
Write-Host "Starting Railway deployment..."

# Navigate to PORT directory
Set-Location PORT

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Build the application
Write-Host "Building application..."
npm run build

# Start the application
Write-Host "Starting application..."
npm run preview
