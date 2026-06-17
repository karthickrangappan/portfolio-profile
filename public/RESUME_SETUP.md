# Resume Setup Instructions

To use the "View Resume" feature on your portfolio, you need to add your resume PDF file to this public folder.

## Steps to Add Your Resume:

1. **Prepare your resume** as a PDF file
   - Name it: `resume.pdf`
   - Or use any name you prefer, then update the code in `ResumeModal.jsx`

2. **Add the file to the public folder**
   - Copy your resume PDF to: `public/resume.pdf`

3. **Update the Resume Content** (Optional but Recommended)
   - Edit `src/components/ResumeModal.jsx`
   - Update the resume content in the modal with your actual information:
     - Professional summary
     - Skills
     - Experience
     - Education
     - Projects

4. **Customize Contact Information**
   - In `ResumeModal.jsx`, update:
     - Email address
     - LinkedIn profile URL
     - GitHub profile URL

## Files Modified:

- **src/components/Hero.jsx** - Added Resume Modal trigger and state
- **src/components/ResumeModal.jsx** - New Resume Modal component
- **public/resume.pdf** - Add your resume PDF here

## Features Included:

✅ Beautiful modal popup for resume display
✅ Scrollable content area for long resumes
✅ Download button to save resume as PDF
✅ Smooth animations and transitions
✅ Responsive design for mobile devices
✅ Styled to match your portfolio theme

## Troubleshooting:

- If the download doesn't work, make sure the resume.pdf file is in the public folder
- The modal uses motion animations from Framer Motion (already installed)
- The styling matches your existing portfolio theme with gradient colors

Happy showcasing! 🚀
