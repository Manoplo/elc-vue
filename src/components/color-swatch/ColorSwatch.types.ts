import { PageType } from "../../global-constants";

export type ColorSwatchProps = {
    colors: Color[];
    selectedColor?: Color;
    from?: PageType;
}

export type Color = {
    name: string;
    value: string;
}

