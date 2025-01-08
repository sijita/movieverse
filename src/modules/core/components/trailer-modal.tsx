import { Modal, ModalContent } from '@nextui-org/react';

export default function TrailerModal({
  trailer,
  isOpen,
  onOpenChange,
}: {
  trailer: string;
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  return (
    <>
      {trailer?.length > 0 && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
          size="3xl"
        >
          <ModalContent className="sm:max-w-[800px] p-0">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
