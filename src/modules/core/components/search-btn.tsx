'use client';
import {
  Button,
  Input,
  Modal,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';
import useSearch from '@/modules/core/hooks/use-search';
import { Movie } from '@/modules/movies/types/movie';
import { Serie } from '@/modules/series/types/serie';
import PosterCard from './poster-card';
import { useEffect, useState } from 'react';
import { searchAction } from '@/modules/core/actions';

export default function SearchBtn({
  setIsMenuOpen,
}: {
  setIsMenuOpen: () => void;
}) {
  const { handleSearch, searchParams } = useSearch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const query = searchParams.get('query')?.toString() ?? '';
  const [searchResults, setSearchResults] = useState<(Movie | Serie)[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const results = await searchAction(query);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <>
      <Button
        className="bg-white rounded-sm max-sm:hidden"
        onPress={() => {
          setIsMenuOpen();
          onOpen();
        }}
        fullWidth
        isIconOnly
      >
        <IconSearch className="text-black" stroke={2.5} size={20} />
      </Button>
      <Button
        className="bg-white rounded-sm sm:hidden"
        onPress={() => {
          setIsMenuOpen();
          onOpen();
        }}
        size="sm"
        isIconOnly
      >
        <IconSearch className="text-black" stroke={2.5} size={17} />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          onOpenChange();
          handleSearch('query', '');
          setSearchResults([]);
        }}
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
        className="bg-transparent shadow-none z-50"
        size="3xl"
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <div className="flex flex-col gap-10 py-10">
              <div className="sticky top-0 z-50 pb-6">
                <Input
                  autoFocus
                  placeholder="Buscar películas, series..."
                  startContent={<IconSearch className="text-default-400" />}
                  onChange={(e) => {
                    handleSearch('query', e.target.value);
                  }}
                  defaultValue={searchParams.get('query')?.toString()}
                  variant="bordered"
                  className="w-full"
                  size="lg"
                  classNames={{
                    input: 'text-lg rounded-sm',
                    inputWrapper:
                      'bg-white/50 dark:bg-black/50 backdrop-blur-xl hover:bg-white/60 transition-colors border-primary rounded-sm',
                  }}
                  onClear={() => {
                    handleSearch('query', '');
                    setSearchResults([]);
                  }}
                  isClearable
                />
              </div>
              {searchResults && searchResults?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
                  {searchResults
                    ?.filter((result) => result && result.poster_path)
                    ?.map((result: Movie | Serie, i) => (
                      <div key={i} className="w-full">
                        <PosterCard
                          poster={result}
                          onCloseSearchModal={onClose}
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
