"use client";
import React, {createContext, useContext, useState} from "react";
import {Client} from "@/app/_utils/types";

type State = {
    clients: Client[];
};

const StoreContext = createContext<{ state: State; setStore: React.Dispatch<React.SetStateAction<State>> }>(
    {} as any
);

export const StoreProvider: React.FC<{ children: React.ReactNode, initialState: State }> = ({ children, initialState }) => {
    const [state, setStore] = useState<State>(initialState);
    return (
        <StoreContext.Provider value={{ state, setStore }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = (): { state: State; setStore: React.Dispatch<React.SetStateAction<State>> } => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};