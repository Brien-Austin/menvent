import { CirclePlus, DoorOpen, Home, MessageSquareText } from "lucide-react";
import { useMemo } from "react";

export const useSideBarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        icon: CirclePlus,
        label: "Create a Post",
        slug: "create-post",
        route : '/create'
      },
      {
        icon : Home,
        label : "Feed",
        slug : 'feed',
        route : '/'

        
    },
    {
        icon : DoorOpen,
        label : "Rooms",
        slug : 'rooms',
        route : '/rooms'

        
    },
    {
        icon : MessageSquareText,
        label : "Messages",
        slug : 'messages',
        route : '/messages'

        
    }
    ],
    []
  );

  return { routes };
};
