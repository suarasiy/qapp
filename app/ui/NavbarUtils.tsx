"use client";

import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Progress,
  User,
} from "@nextui-org/react";
import React from "react";
import {
  AiFillDashboard,
  AiFillQuestionCircle,
  AiFillSetting,
  AiOutlineDownload,
  AiOutlineExport,
  AiOutlineImport,
  AiOutlineRead,
} from "react-icons/ai";

const NavbarUtils = () => {
  return (
    <div className="mt-10 flex w-fit gap-3 rounded-2xl bg-slate-200 px-2 py-[6px]">
      <Button
        className="shrink-0 px-5 font-medium"
        startContent={
          <AiOutlineDownload className="pointer-events-none flex-shrink-0 text-sm text-default-400" />
        }
      >
        Save
      </Button>
      <Dropdown backdrop="blur" placement="bottom-start">
        <DropdownTrigger>
          <Avatar
            radius="lg"
            src="/logo.png"
            className="cursor-pointer transition-transform"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownSection aria-label="User Information" showDivider>
            <DropdownItem key="profile" className="h-14 gap-2" isReadOnly>
              <User
                name="QAPP"
                description="Local User"
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                avatarProps={{
                  size: "sm",
                  radius: "sm",
                  src: "/logo.png",
                  className: "transition-transform",
                }}
              />
            </DropdownItem>
            <DropdownItem aria-label="Progress">
              <Progress
                value={50}
                maxValue={100}
                size="sm"
                label="Progress"
                showValueLabel
                classNames={{
                  indicator: "bg-slate-800",
                }}
              />
            </DropdownItem>
            <DropdownItem
              aria-label="Dashboard"
              startContent={<AiFillDashboard />}
            >
              Dashboard
            </DropdownItem>
            <DropdownItem
              aria-label="Settings"
              startContent={<AiFillSetting />}
            >
              Settings
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Data" showDivider>
            <DropdownItem
              aria-label="Import Data"
              shortcut="json"
              startContent={<AiOutlineImport />}
            >
              Import Data
            </DropdownItem>
            <DropdownItem
              aria-label="Export Data"
              shortcut="json"
              startContent={<AiOutlineExport />}
            >
              Export Data
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Quick Access" aria-label="Tools" showDivider>
            <DropdownItem
              aria-label="Continue Last Read"
              color="success"
              className="text-success-600"
              startContent={<AiOutlineRead />}
            >
              Continue Last Read
            </DropdownItem>
          </DropdownSection>
          <DropdownItem aria-label="Footer" isReadOnly>
            <div className="flex cursor-default flex-row items-center gap-2">
              <Button size="sm" aria-label="FAQ" variant="flat" isIconOnly>
                <AiFillQuestionCircle size={22} />
              </Button>
              <Divider orientation="vertical" className="h-5" />
              <small className="text-start text-default-500">
                Qur'an App 2024.
              </small>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarUtils;
