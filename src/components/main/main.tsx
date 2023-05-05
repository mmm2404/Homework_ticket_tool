import { PropsWithChildren } from "react";
import style from "./main.module.css";

function Main({ children }: PropsWithChildren) {
  return <main className={style.page}>{children}

 </main>;
}

export default Main;