# Active Context

## Current Focus
The project is currently in a functional state with basic CRUD operations for both Motorcycles and Categories. The focus is on educational use, demonstrating full-stack web development concepts to first-year DAM students.

## Recent Changes
- Implemented both JSON API and EJS web interfaces
- Set up relationships between Categories and Motorcycles
- Added Docker containerization
- Configured development environment with nodemon

## Active Decisions
1. **Educational Focus**: Code is structured for clarity and learning rather than production optimization
2. **Dual Interface**: Maintaining both API endpoints and web views to demonstrate different approaches
3. **Database Seeding**: Including sample data creation in app.js for immediate usability
4. **Environment Configuration**: Using .env for flexible configuration across environments

## Current Status
The application is functional with:
- Complete data models
- Working API endpoints
- Basic EJS templates
- Database relationships
- Development environment setup

## Known Issues
- Database is reset on each application restart (`sequelize.sync({ force: true })`)
- Limited error handling in some routes
- Basic UI with minimal styling
- No authentication or authorization
- No unit or integration tests

## Next Steps
Potential improvements for the project:

### Short-term
1. Add more comprehensive error handling
2. Improve UI with CSS styling
3. Add form validation
4. Add pagination for listing pages
5. Implement search functionality

### Medium-term
1. Add user authentication
2. Create proper database migrations rather than force sync
3. Add unit and integration tests
4. Implement image upload for motorcycles
5. Add filtering and sorting options

### Long-term
1. Build a more sophisticated frontend (possibly with React/Vue)
2. Implement user roles and permissions
3. Add more complex relationships between models
4. Set up CI/CD pipeline
5. Create comprehensive documentation 