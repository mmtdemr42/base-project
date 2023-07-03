import {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
  } from "react";
import { AppProviderProps } from "@/types/AppTypes";
import Modal from "@/components/modal";
  
  interface AppContextType {
    isPageLoading: boolean;
    setIsPageLoading: Dispatch<SetStateAction<boolean>>;
    deneme: string;
    handleBaseModal: (header: string, children:null) => void;
    handleClose: () => void;
  }
  
  export const AppProvider = ({ children }: AppProviderProps) => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [deneme, setDeneme] = useState("Context");
    const [open, setOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState("");
    const [modalChildren, setModalChildren] =  useState<ReactNode>(null);


  

  const handleClose = () => {
    setOpen(false);
  };

  const handleBaseModal = (header: string, children:ReactNode  ) => {
      setOpen(true);
      setModalHeader(header);
      setModalChildren(children);
  }

  
    return (
     
      <AppContext.Provider value={{ isPageLoading, setIsPageLoading, deneme, handleBaseModal , handleClose }}>
         <Modal modalChildren={modalChildren} open={open} handleClose={handleClose}  header={modalHeader} />
        {children}
       
      </AppContext.Provider>
      
    );
  };
  
  export const AppContext = createContext<AppContextType | null>(null);