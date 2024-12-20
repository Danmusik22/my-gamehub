import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaLinux,
    FaApple,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe,
    };

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon
                    key={platform.id}
                    as={iconMap[platform.slug]}
                    color="gray.500"
                />
            ))}
        </HStack>
    );
}

export default PlatformIconList;
