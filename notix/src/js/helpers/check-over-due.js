import getDate from "./get-date";

export default function checkOverDue(obj) {
    return (new Date(obj.todoExpDate) < new Date(getDate())) ? 'overdue' : '';
}