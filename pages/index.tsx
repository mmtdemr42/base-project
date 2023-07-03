import { AppContext } from '@/context/Appcontext';
import GlobalLayout from '@/layouts/globalLayout'
import { baseApiURL } from '@/lib/constants/apis';
import ApiService from '@/lib/services/concrete/ApiService';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useContext } from 'react'


type HomePageProps = {
  name: string;
};

export default function HomePage({name}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //Örnek useContext
  const appContext = useContext(AppContext);
  
  return (
    <GlobalLayout>
    <div>Ana Sayfa {appContext?.deneme}</div>
    <div>{name}</div>
    </GlobalLayout>
  )
}


export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  try {
    const apiService = new ApiService(baseApiURL);
    const response = await apiService.get("/hello", "token");
    const name = response.data.name;
    return {
      props: {
        name: name,
      },
    };
  } catch (error) {
    console.error("Kullanıcılar getirilemedi:", error);
    return {
      props: {
        name: "error",
      },
    };
  }
};

