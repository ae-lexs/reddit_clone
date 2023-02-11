export const INVALID_AUTH_MODAL_ACTION_TYPE = 'INVALID_AUTH_MODAL_ACTION_TYPE';

export enum AuthModalActionType {
  CLOSE = 'CLOSE',
  OPEN = 'OPEN',
}

type AuthModalState = {
  isOpen: boolean;
};

type AuthModalAction = {
  type?: AuthModalActionType;
};

function AuthModalReducer(
  state: AuthModalState,
  action: AuthModalAction,
): AuthModalState {
  switch (action.type) {
    case AuthModalActionType.CLOSE:
      return {
        isOpen: false,
      };
    case AuthModalActionType.OPEN:
      return {
        isOpen: true,
      };
    default:
      throw new Error(INVALID_AUTH_MODAL_ACTION_TYPE);
  }
}

export default AuthModalReducer;
