import Load from "./load/load";
import SortWidget from "./sortwidget/sortwidget";

const load = new Load();

const sortWidget = new SortWidget(load.getMessage());

sortWidget.startSorting();
