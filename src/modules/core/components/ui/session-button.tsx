import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { IconLogout, IconUser } from '@tabler/icons-react';
import { signoutAction } from '@/modules/core/actions/signout';
import { mutate } from 'swr';
import toast from 'react-hot-toast';

export default function SessionButton({ email }: { email?: string }) {
  return (
    <Dropdown className="bg-[#0d0d0d] rounded-sm" showArrow>
      <DropdownTrigger>
        <Button
          className="text-black bg-primary rounded-sm font-bold transform hover:rotate-2 hover:scale-105 transition-transform"
          variant="bordered"
        >
          <IconUser className="flex-shrink-0" stroke={2.5} size={17} />
          {email?.split('@')[0]}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="bg-[#0d0d0d] rounded-sm"
        aria-label="Static Actions"
      >
        <DropdownItem
          key="logout"
          className="rounded-sm"
          onPress={async () => {
            await signoutAction();
            mutate('user-favorites', []);
            toast.success('Sesión cerrada');
          }}
          endContent={<IconLogout size={15} />}
        >
          Cerrar sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
