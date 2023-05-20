import Load from "./load/load";
import SortWidget from "./sortWidget/sortwidget";

const load = new Load();

const sortWidget = new SortWidget(load.getMessage());

sortWidget.startSorting();
