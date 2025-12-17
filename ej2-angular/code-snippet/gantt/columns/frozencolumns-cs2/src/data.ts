export let GanttData: Object[] = [
  {
    TaskID: 1,
    TaskName: "Project Initiation",
    Progress: 100,
    Status: "Completed",
  },

  {
    TaskID: 2,
    TaskName: "Kickoff Meeting",
    ParentID: 1,
    StartDate: new Date("2025-03-03"),
    Duration: 1,
    Progress: 100,
    Status: "Completed",
  },
  {
    TaskID: 3,
    TaskName: "Requirements Gathering",
    ParentID: 1,
    StartDate: new Date("2025-03-04"),
    Duration: 3,
    Progress: 100,
    Status: "Completed",
  },

  // 4. System Design (Parent)
  {
    TaskID: 4,
    TaskName: "System Design",
    Progress: 100,
    Status: "In Progress",
  },

  {
    TaskID: 5,
    TaskName: "Architecture Design",
    ParentID: 4,
    StartDate: new Date("2025-03-07"),
    Duration: 4,
    Progress: 90,
    Status: "In Progress",
  },
  {
    TaskID: 6,
    TaskName: "Database Design",
    ParentID: 4,
    StartDate: new Date("2025-03-12"),
    Duration: 3,
    Progress: 70,
    Status: "In Progress",
  },

  // 7. Development Phase (Parent)
  {
    TaskID: 7,
    TaskName: "Development Phase",
    Progress: 82,
    Status: "In Progress",
  },

  {
    TaskID: 8,
    TaskName: "Backend Development",
    ParentID: 7,
    StartDate: new Date("2025-03-15"),
    Duration: 5,
    Progress: 70,
    Status: "In Progress",
  },
  {
    TaskID: 9,
    TaskName: "Frontend Development",
    ParentID: 7,
    StartDate: new Date("2025-03-20"),
    Duration: 5,
    Progress: 55,
    Status: "In Progress",
  },
  {
    TaskID: 10,
    TaskName: "API Integration",
    ParentID: 7,
    StartDate: new Date("2025-03-25"),
    Duration: 4,
    Progress: 60,
    Status: "In Progress",
  },

  // 11. Testing Cycle (Parent)
  {
    TaskID: 11,
    TaskName: "Testing Cycle",
    Progress: 48,
    Status: "In Progress",
  },

  {
    TaskID: 12,
    TaskName: "Test Planning",
    ParentID: 11,
    StartDate: new Date("2025-03-29"),
    Duration: 3,
    Progress: 90,
    Status: "In Progress",
  },
  {
    TaskID: 13,
    TaskName: "Test Execution",
    ParentID: 11,
    StartDate: new Date("2025-04-01"),
    Duration: 4,
    Progress: 60,
    Status: "In Progress",
  },
  {
    TaskID: 14,
    TaskName: "Bug Fixing",
    ParentID: 11,
    StartDate: new Date("2025-04-05"),
    Duration: 4,
    Progress: 30,
    Status: "In Progress",
  },

  // 15. Deployment (Parent)
  {
    TaskID: 15,
    TaskName: "Deployment & Go-Live",
    Progress: 0,
    Status: "Not Started",
  },

  {
    TaskID: 16,
    TaskName: "Final Release",
    ParentID: 15,
    StartDate: new Date("2025-04-09"),
    Duration: 3,
    Progress: 0,
    Status: "Not Started",
  },
];
