import EmailIcon from "@/icons/email-icon";
import TimerIcon from "@/icons/timer-icon";
import StarIcon from "@/icons/star-icon";
import ChatIcon from "@/icons/chat-icon";
import HelpDeskIcon from "@/icons/help-desk-icon";

type TABS_MENU_PROPS = {
    label: string
    icon?: JSX.Element
}

export const TABS_MENU: TABS_MENU_PROPS[] = [
    {
        label: 'unread',
        icon: <EmailIcon />,
    },
    {
        label: 'all',
        icon: <EmailIcon />,
    },
    {
        label: 'expired',
        icon: <TimerIcon />,
    },
    {
        label: 'starred',
        icon: <StarIcon />,
    },
]

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
    {
        label: 'help desk',
    },
    {
        label: 'questions',
    },
]

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
    {
        label: 'chat',
        icon: <ChatIcon />,
    },
    {
        label: 'helpdesk',
        icon: <HelpDeskIcon />,
    },
]