import AuthModalReducer, {
  AuthModalActionType,
  INVALID_AUTH_MODAL_ACTION_TYPE,
} from './index';

describe('AuthModalReducer', () => {
  describe('when the case is CLOSE', () => {
    test('should set the isOpen to FALSE', () => {
      const actualState = AuthModalReducer(
        { isOpen: true },
        { type: AuthModalActionType.CLOSE },
      );

      expect(actualState).toEqual({ isOpen: false });
    });
  });

  describe('when the case is OPEN', () => {
    test('should set the isOpen to TRUE', () => {
      const actualState = AuthModalReducer(
        { isOpen: false },
        { type: AuthModalActionType.OPEN },
      );

      expect(actualState).toEqual({ isOpen: true });
    });
  });

  describe('when the case is an unexpected one', () => {
    test('should throw InvalidAuthModalActionTypeError', () => {
      expect(() => {
        AuthModalReducer({ isOpen: false }, { type: undefined });
      }).toThrow(INVALID_AUTH_MODAL_ACTION_TYPE);
    });
  });
});
