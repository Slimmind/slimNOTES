import getDate from "../helpers/get-date";

export default function checkOverDue(obj) {
    return (new Date(obj.todoExpDate) < new Date(getDate())) ? 'overdue' : '';
}