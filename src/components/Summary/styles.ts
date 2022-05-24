import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: -10rem;
  flex-wrap: wrap;

  div {
    flex: 1 0 300px;
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    width: 100%;

    &:last-child {
      background-color: var(--green);
      color: #fff;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      display: block;
      font-weight: 600;
    }
  }
`;
