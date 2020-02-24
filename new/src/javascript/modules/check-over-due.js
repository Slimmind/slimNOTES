export default function checkOverDue(obj) {
    return (new Date(obj.todoExpDate) < new Date(dateString)) ? 'overdue' : '';
}