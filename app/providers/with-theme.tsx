import { ReactElement } from "react";

export const withTheme = (component: () => ReactElement) => () =>
    <div className="app">{component()}</div>;
