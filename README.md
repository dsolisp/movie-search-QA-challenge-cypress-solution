# Movie Search Platform - QA Testing Challenge

## 🎯 Challenge Overview

Welcome to the **Movie Search Platform QA Testing Challenge**! This is a take-home assessment designed to evaluate your skills as a QA Engineer who can build testing systems and quality assurance processes that proactively prevent issues.

- **Focus**: Quality over quantity - demonstrate core QA skills effectively

## 🚨 The Challenge

You've been given a **functional but problematic** movie search application that needs testing coverage and quality assessment. Your mission is to:

1. **Build a foundational test suite** covering critical functionality
2. **Identify and document key quality issues** in the existing codebase
3. **Propose QA processes** that prevent issues before release
4. **Demonstrate testing expertise** through practical implementation

## 🎬 What You're Working With

This is a full-stack movie search application with:
- **Backend**: Express.js API with OMDb integration
- **Frontend**: Next.js React application
- **Current State**: Functional but has quality issues, bugs, and lacks proper testing

### Current Functionality
- ✅ Search movies from OMDb API
- ✅ Add/remove favorites (stored in JSON file)
- ✅ Basic pagination
- ✅ Simple UI

### Known Issues (Your Testing Should Find More!)
- ❌ Poor error handling
- ❌ No loading states
- ❌ Memory leaks potential
- ❌ No input validation
- ❌ Security vulnerabilities
- ❌ No tests whatsoever

## 🎯 Your Mission

As a QA Engineer, demonstrate your ability to:

### 1. Test Implementation (Priority: High)
- Set up basic testing framework
- Create tests for critical user workflows
- Test API endpoints for key functionality
- Identify and document bugs found through testing

### 2. Quality Assessment (Priority: High)
- Perform exploratory testing
- Document discovered bugs with severity
- Analyze quality risks
- Provide improvement recommendations

### 3. QA Process Design (Priority: Medium)
- Propose testing strategy
- Design quality gates and checkpoints
- Create bug tracking approach
- Outline QA process improvements

### 4. Testing Infrastructure (Priority: Medium)
- Set up basic test automation
- Configure test environment
- Create reusable test utilities
- Implement test reporting

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+
- OMDb API key (get one free at https://www.omdbapi.com/apikey.aspx)
- Git
- Testing framework of your choice (Jest, Mocha, Playwright, Cypress, etc.)

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd movie-search-challenge

# Backend setup
cd backend
npm install
cp env.example .env
# Edit .env and add your OMDb API key: OMDB_API_KEY=your_key_here
npm start

# Frontend setup (in new terminal)
cd frontend
npm install
npm run dev
```

## 📋 Core Deliverables (Required)

### 1. Test Suite (40%)
Focus on **quality over quantity**. Include:
- **Critical Path Tests**: Tests for main user workflows (search, favorites)
- **API Tests**: Key endpoint testing (at least 3-5 critical endpoints)
- **Frontend Tests**: Essential component/functionality tests
- **Test Quality**: Well-structured, maintainable tests with clear assertions

**Expected**: 10-20 well-written tests (not hundreds)

### 2. Bug Report (30%)
Comprehensive bug documentation:
- **Discovered Bugs**: All bugs found during testing
- **Severity Classification**: P0 (Critical), P1 (High), P2 (Medium), P3 (Low)
- **Clear Descriptions**: Steps to reproduce, expected vs. actual
- **Impact Assessment**: Business/user impact of each bug

**Expected**: Document at least 5-10 quality issues

### 3. Testing Strategy Document (20%)
Brief but focused testing strategy:
- **Testing Approach**: How you approached the challenge
- **Test Coverage Plan**: What you tested and why
- **Quality Gates**: Proposed checkpoints to prevent issues
- **Recommendations**: Key improvements for QA process

**Expected**: 1-2 page document covering approach and recommendations

### 4. Test Infrastructure Setup (10%)
Basic automation setup:
- **Framework Configuration**: Testing tools set up and working
- **Test Execution**: Ability to run tests automatically
- **Basic Reporting**: Test results visible/accessible

**Expected**: Functional test framework with automated execution

## 🎯 Evaluation Focus

Your solution will be evaluated on:

1. **Testing Excellence** (40%)
   - Test quality and structure
   - Coverage of critical functionality
   - Testing best practices
   - Bug discovery effectiveness

2. **QA Mindset** (30%)
   - Proactive quality thinking
   - Risk identification
   - Process-oriented approach
   - Professional QA practices

3. **Issue Identification** (20%)
   - Thorough bug discovery
   - Quality issue documentation
   - Severity classification accuracy
   - Impact assessment

4. **Practical Implementation** (10%)
   - Working test infrastructure
   - Clear documentation
   - Professional presentation
   - Actionable recommendations

## 💡 Tips for Success

1. **Start Testing Immediately**: Don't spend too long on setup - get testing
2. **Focus on Critical Path**: Test the main workflows first
3. **Document As You Go**: Keep notes while testing
4. **Quality Over Quantity**: 10 great tests beat 100 poor ones
5. **Think Proactively**: How can we prevent these issues?
6. **Show Your Process**: Demonstrate QA engineering thinking

## 📚 Resources

- [Jest Documentation](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Playwright](https://playwright.dev/)
- [QA Best Practices](https://www.testingexcellence.com/)

## 🎉 Good Luck!

**Remember**: This challenge evaluates your ability to build testing systems and QA processes that ensure a robust, reliable platform. Focus on demonstrating core QA engineering skills effectively within the time limit.

**Quality over quantity - show us your QA expertise!**