import NoPriorityIcon from '../assets/icons/No-priority.svg';
import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
import UrgentIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
import BacklogIcon from '../assets/icons/Backlog.svg';
import TodoIcon from '../assets/icons/To-do.svg';
import InProgressIcon from '../assets/icons/in-progress.svg';
import DoneIcon from '../assets/icons/Done.svg';
import CancelledIcon from '../assets/icons/Cancelled.svg';

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: <img src={NoPriorityIcon} alt="no priority" /> },
    { title: "low", color: "lightgray", icon: <img src={LowPriorityIcon} alt="low priority" /> },
    { title: "medium", color: "gray", icon: <img src={MediumPriorityIcon} alt="medium priority" /> },
    { title: "high", color: "black", icon: <img src={HighPriorityIcon} alt="high priority" /> },
    { title: "urgent", color: "orange", icon: <img src={UrgentIcon} alt="urgent" /> },
];

export const status = [
    { title: "backlog", color: "black", icon: <img src={BacklogIcon} alt="backlog" /> },
    { title: "todo", color: "lightgrey", icon: <img src={TodoIcon} alt="todo" /> },
    { title: "in progress", color: "#EBCB62", icon: <img src={InProgressIcon} alt="in progress" /> },
    { title: "done", color: "#606ACB", icon: <img src={DoneIcon} alt="done" /> },
    { title: "cancelled", color: "gray", icon: <img src={CancelledIcon} alt="cancelled" /> },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: <img src={BacklogIcon} alt="backlog" />,
    },
    todo: {
        color: "lightgrey",
        icon: <img src={TodoIcon} alt="todo" />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <img src={InProgressIcon} alt="in progress" />,
    },
    done: {
        color: "#606ACB",
        icon: <img src={DoneIcon} alt="done" />,
    },
    cancelled: {
        color: "gray",
        icon: <img src={CancelledIcon} alt="cancelled" />,
    },
};
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};