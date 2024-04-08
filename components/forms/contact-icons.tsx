import { Text, Box, Stack, rem } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";
import classes from "./contact-icons.module.css";
import { StaggerItem } from "@/components";
import { title } from "process";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface ContactDetails {
  email: string;
  phoneNumber: string;
  address: string;
  workingHours: string;
}

interface ContactIconsListProps {
  contactDetails: ContactDetails;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

export async function ContactIconsList({
  contactDetails,
}: ContactIconsListProps) {
  const { email, phoneNumber, address, workingHours } = contactDetails;

  let data = [] as {
    title: string;
    description: string;
    icon: typeof IconSun;
  }[];

  if (email) {
    data.push({ title: "Email", description: email, icon: IconAt });
  }
  if (phoneNumber) {
    data.push({ title: "Phone", description: phoneNumber, icon: IconPhone });
  }
  if (address) {
    data.push({ title: "Address", description: address, icon: IconMapPin });
  }
  if (workingHours) {
    data.push({
      title: "Working hours",
      description: workingHours,
      icon: IconSun,
    });
  }

  const items = data.map((item, index) => (
    <StaggerItem index={index} key={index}>
      <ContactIcon
        icon={item.icon}
        title={item.title}
        description={item.description}
      />
    </StaggerItem>
  ));
  return <Stack>{items}</Stack>;
}
