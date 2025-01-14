'use client';
import { IconUser } from '@tabler/icons-react';
import { Button, Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import AuthTabs from './auth-tabs';

export default function AuthModal() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <Button
        color="primary"
        className="text-black bg-primary rounded-sm font-bold transform hover:rotate-2 hover:scale-105 transition-transform"
        onPress={() => onOpen()}
        endContent={<IconUser stroke={2.5} size={17} />}
      >
        Iniciar sesión
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
        backdrop="blur"
        className="z-50 rounded-sm"
        scrollBehavior="inside"
      >
        <ModalContent className="p-10">
          <AuthTabs />
        </ModalContent>
      </Modal>
    </>
  );
}
