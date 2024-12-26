import { fireEvent, screen } from "@testing-library/dom";
import { localStorageMock } from "../__mocks__/localStorage.js";
import mockStore from "../__mocks__/store";
import { ROUTES } from "../constants/routes";
import NewBill from "../containers/NewBill.js";
import { bills } from "../fixtures/bills.js";
import NewBillUI from "../views/NewBillUI.js";

const onNavigate = (pathname) => {
  document.body.innerHTML = ROUTES({ pathname });
};
describe("Given I am connected as an employee", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
    window.localStorage.setItem("user", JSON.stringify({ type: "Employee" }));
  });
  describe("When I am on NewBill Page", () => {
    test("Then I click change file button, Then file input should be displayed", () => {
      const html = NewBillUI();
      document.body.innerHTML = html;

      const newBill = new NewBill({
        document,
        onNavigate,
        store: mockStore,
        localStorage,
      });
      const fileInput = screen.getByTestId("file");
      expect(fileInput).toBeTruthy();
      const handleChangeFile = jest.fn(newBill.handleChangeFile);
      fileInput.addEventListener("change", handleChangeFile);
      fireEvent.change(fileInput, {
        target: {
          files: [
            new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
          ],
        },
      });
      expect(handleChangeFile).toHaveBeenCalled();
    });

    test("When I click on send button, Then I should be sent on Bills page", () => {
      const html = NewBillUI();
      document.body.innerHTML = html;
      const newBill = new NewBill({
        document,
        onNavigate,
        store: mockStore,
        localStorage,
      });
      const formNewBill = screen.getByTestId("form-new-bill");
      const handleSubmit = jest.fn(newBill.handleSubmit);
      formNewBill.addEventListener("submit", handleSubmit);
      fireEvent.submit(formNewBill);
      expect(handleSubmit).toHaveBeenCalled();
    });

    test("When I fill the form, Then I should be sent on Bills page", () => {
      const html = NewBillUI();
      document.body.innerHTML = html;
      const newBill = new NewBill({
        document,
        onNavigate,
        store: mockStore,
        localStorage,
      });
      newBill.updateBill = jest.fn();
      const formNewBill = screen.getByTestId("form-new-bill");
      const mockedBill = bills[0];

      fireEvent.change(
        formNewBill.querySelector(`input[data-testid="expense-name"]`),
        {
          target: {
            value: mockedBill.name,
          },
        }
      );
      fireEvent.change(
        formNewBill.querySelector(`input[data-testid="datepicker"]`),
        {
          target: {
            value: mockedBill.date,
          },
        }
      );
      fireEvent.change(
        formNewBill.querySelector(`input[data-testid="amount"]`),
        {
          target: {
            value: mockedBill.amount,
          },
        }
      );
      fireEvent.change(formNewBill.querySelector(`input[data-testid="vat"]`), {
        target: {
          value: mockedBill.vat,
        },
      });
      fireEvent.change(formNewBill.querySelector(`input[data-testid="pct"]`), {
        target: {
          value: mockedBill.pct,
        },
      });
      fireEvent.change(
        formNewBill.querySelector(`textarea[data-testid="commentary"]`),
        {
          target: {
            value: mockedBill.commentary,
          },
        }
      );
      fireEvent.change(formNewBill.querySelector(`input[data-testid="file"]`), {
        target: {
          files: [
            new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
          ],
        },
      });

      const handleSubmit = jest.fn(newBill.handleSubmit);
      formNewBill.addEventListener("submit", handleSubmit);
      fireEvent.submit(formNewBill);
      expect(handleSubmit).toHaveBeenCalled();
      expect(newBill.updateBill).toHaveBeenCalled();
      //expect(newBill.updateBill).toHaveBeenCalledWith(mockedBill);
      const heading = screen.getByText("Mes notes de frais");
      expect(heading).toBeTruthy();
    });
  });
});
