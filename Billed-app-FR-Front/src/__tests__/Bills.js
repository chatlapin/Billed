import { fireEvent, screen, waitFor } from "@testing-library/dom";
import { localStorageMock } from "../__mocks__/localStorage.js";
import store from "../__mocks__/store";
import { ROUTES_PATH } from "../constants/routes.js";
import Bills from "../containers/Bills.js";
import { bills } from "../fixtures/bills.js";
import BillsUI from "../views/BillsUI.js";
import router from "../app/Router.js";
/*
const onNavigate = (pathname) => {
  document.body.innerHTML = ROUTES({ pathname })
}
*/
describe("Given I am connected as an employee", () => {
  beforeEach(() => {
    document.body.innerHTML = BillsUI({ data: bills });
    Object.defineProperty(window, "localStorage", { value: localStorageMock }); // Simulating employee connection before each test
    window.localStorage.setItem("user", JSON.stringify({ type: "Employee" }));
  });
  describe("When I am on Bills Page", () => {
    test("Then bill icon in vertical layout should be highlighted", async () => {
      const root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.append(root);
      router();
      window.onNavigate(ROUTES_PATH.Bills);
      await waitFor(() => screen.getByTestId("icon-window"));
      const windowIcon = screen.getByTestId("icon-window");
      // Checking if windowIcon HTML element has active-icon class
      expect(windowIcon.classList.contains("active-icon")).toBe(true);
    });
    test("Then bills should be ordered from earliest to latest", () => {
      const dates = screen
        .getAllByText(
          /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i
        )
        .map((a) => a.innerHTML);
      const antiChrono = (a, b) => (a < b ? 1 : -1);
      const datesSorted = [...dates].sort(antiChrono);
      expect(dates).toEqual(datesSorted);
    });

    test("When I click on the icon eye, Then modale file should be displayed", async () => {
      const billsDashboard = new Bills({
        document,
        onNavigate,
        store,
        localStorage: window.localStorage,
      });

      $.fn.modal = jest.fn();
      const iconEyes = screen.getAllByTestId("icon-eye");
      iconEyes.forEach(async (icon) => {
        const handleClickIconEye = jest.fn(
          billsDashboard.handleClickIconEye(icon)
        );
        icon.addEventListener("click", handleClickIconEye);
        fireEvent.click(icon);
        expect(handleClickIconEye).toHaveBeenCalled();
        //const modal = await waitFor(screen.getByRole("dialog"));
        //expect(modal).toBeTruthy();
        //expect(screen.getByText("Justificatif")).toBeTruthy();
      });
    });

    test("When click on new bill button, Then new bill page should be rendered", async () => {
      //const BillsDashBoard = new Bills({ document, onNavigate, store, localStorage: window.localStorage });
      const root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.append(root);
      router();
      window.onNavigate(ROUTES_PATH.Bills);
      const newBillButton = screen.getByTestId("btn-new-bill");
      fireEvent.click(newBillButton);
      //await waitFor(() => screen.getByText('Envoyer une note de frais'))
      expect(screen.getByText("Envoyer une note de frais")).toBeTruthy();
    });

    test("When I enter the page, then getBills function should be called", async () => {
      const billsDashboard = new Bills({
        document,
        onNavigate,
        store,
        localStorage: window.localStorage,
      });
      const billsLoaded = await billsDashboard.getBills();
      expect(billsLoaded.length).toBe(bills.length);
    });
  });
});
