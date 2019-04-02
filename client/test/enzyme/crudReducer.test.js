import crudReducer from '../../helpers/crudReducer';

describe('Crud Reducer Function', () => {
  let state;

  beforeEach(() => {
    state = [1, 2, 3];
  });

  describe('existence and structure', () => {
    it('should exist', () => {
      expect(crudReducer).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof crudReducer === 'function').toBeTruthy();
    });

    it('should be a function', () => {
      expect(typeof crudReducer === 'function').toBeTruthy();
    });
  });

  describe('functionality', () => {
    it('should return passed state for unknown action type', () => {
      const newState = crudReducer(state, {
        type: 'unknown',
        payload: [8, 6, 5],
      });
      expect(newState === state).toBeTruthy();
    });

    it('should return elongated array for "add" action type', () => {
      const newState = crudReducer(state, {
        type: 'add',
        payload: 4,
      });
      expect(newState).toHaveLength(state.length + 1);
    });

    it('should include passed payload for "add" action type', () => {
      const newState = crudReducer(state, {
        type: 'add',
        payload: 4,
      });
      expect(newState).toContain(4);
    });

    it('should return shortened array for "add" action type', () => {
      const newState = crudReducer(state, {
        type: 'remove',
        payload: 3,
      });
      expect(newState).toHaveLength(state.length - 1);
    });

    it('should include passed payload for "add" action type', () => {
      const newState = crudReducer(state, {
        type: 'remove',
        payload: 3,
      });
      expect(newState).not.toContain(3);
    });
  });
});
