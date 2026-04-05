import { create } from "zustand";


const useAuthStore = create ( (set)=>({
    token:localStorage.getItem("accessToken"),
    setToken:(newToken)=>{
        set({
            token:newToken
        });
        localStorage.setItem("accessToken",newToken);
    },
    logout:(queryClient)=>{
        set({
            token:null
        });
        localStorage.removeItem("accessToken");
        if (queryClient) {
    queryClient.clear();
  }
    }
}));
export default useAuthStore;