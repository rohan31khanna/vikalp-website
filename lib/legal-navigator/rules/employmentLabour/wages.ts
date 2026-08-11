import { createPreparation } from "../common/createPreparation";

export function getSalaryWagesPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding unpaid salary, wages or other employment-related financial dues.",
      "Your responses indicate that salary records, employment terms, payment history and communications with the employer should be reviewed carefully.",
      "The consultation will focus on understanding the outstanding dues, the basis of the claim and the available legal remedies."
    ],

    documents: [
      "Employment Agreement / Appointment Letter",
      "Salary Slips",
      "Bank Statements Showing Salary Payments",
      "Salary / Wage Calculation Records",
      "Attendance / Timesheet Records (if relevant)",
      "Bonus / Incentive Documents (if applicable)",
      "Full & Final Settlement Statement (if applicable)",
      "Employer / HR Correspondence",
      "Demand Letter or Legal Notice (if any)",
      "Previous Complaint or Labour Authority Documents (if any)",
      "Any Other Relevant Employment Documents"
    ],

    discussionPoints: [
      "Background of the employment relationship",
      "Salary or wages agreed under the employment terms",
      "Amount and period of unpaid dues",
      "Salary, bonus, incentive or other pending payments",
      "Payment history and bank records",
      "Communication with the employer or HR",
      "Reasons given for non-payment, if any",
      "Full and final settlement status",
      "Complaints or legal action already initiated",
      "Desired outcome and immediate financial concerns"
    ],

    consultationFocus: [
      "Reviewing employment and salary records",
      "Understanding the basis and amount of the outstanding claim",
      "Assessing applicable employment and labour law remedies",
      "Identifying relevant documentation and procedural requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}