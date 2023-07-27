import { createRoot } from "react-dom/client";

import "./index.css";

import { ContextProvider } from "./examples/hooks/03.1-Context-Provider";

// Fundamentals
import Jsx from "./examples/Jsx";
import Componente from "./examples/Componente";
import Estados from "./examples/Estados";
import Props from "./examples/Props";
import Props_x_States from "./examples/Props_x_States";

// Hooks
import UseStateExample from "./examples/hooks/01-useState";
import UseEffectExample from "./examples/hooks/02-useEffect";
import UseContextExample from "./examples/hooks/03-useContext";
import UseCallbackExample from "./examples/hooks/04-useCallback";
import UseMemoExample from "./examples/hooks/05-useMemo";
import UseRefExample from "./examples/hooks/06-useRef";
import UseImperativeHandleExample from "./examples/hooks/07-useImperativeHandle";
import UseCustomHookExample from "./examples/hooks/08-useCustomHook";

// Forms
import { Form } from "./examples/Form";

//Styles
import { StylesExample } from "./examples/Styles/StylesExample";

//axios
import { PostUseAxios } from "./examples/Axios/PostUseAxios";

// Performance
import { ListItems } from "./examples/Performance";

const root = createRoot(document.querySelector("#root"));

// Use o componente que queira visualizar o exemplos sendo executado
root.render(
  <ContextProvider>
    <PostUseAxios />
  </ContextProvider>
);
