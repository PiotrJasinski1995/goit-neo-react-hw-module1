import * as Styled from "./styled";

interface ITransaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

interface ITransactionHistory {
  items: Array<ITransaction>;
}

const TransactionHistory = ({ items }: ITransactionHistory) => (
  <Styled.TableContainer>
    <table>
      <thead>
        <tr>
          <Styled.StyledTh>Type</Styled.StyledTh>
          <Styled.StyledTh>Amount</Styled.StyledTh>
          <Styled.StyledTh>Currency</Styled.StyledTh>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <Styled.StyledTd>{item.type}</Styled.StyledTd>
            <Styled.StyledTd>{item.amount}</Styled.StyledTd>
            <Styled.StyledTd>{item.currency}</Styled.StyledTd>
          </tr>
        ))}
      </tbody>
    </table>
  </Styled.TableContainer>
);

export default TransactionHistory;
