import { create } from "zustand";

interface SouratesPagination {
  currentPage: number;
  totalPage: number;
  setPage: (page: number) => void;
  setTotalPage: (total: number) => void;
  toNextPage: () => void;
  toPreviousPage: () => void;
}

export const useSouratesPagination = create<SouratesPagination>((set, get) => ({
  currentPage: 1,
  totalPage: 1,
  setTotalPage: (total: number) => set({ totalPage: total }),
  setPage: (page: number) => set({ currentPage: page }),
  toNextPage: () => {
    const nextPage = get().currentPage + 1;
    if (nextPage > get().totalPage) return;
    set({ currentPage: nextPage });
  },
  toPreviousPage: () => {
    const previousPage = get().currentPage - 1;
    if (previousPage < 0) return;
    set({ currentPage: previousPage });
  },
}));
