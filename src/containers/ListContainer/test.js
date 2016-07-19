/* global define, it, describe, expect, assert */

// Actions test
import { fetchPosts, types } from './actions';

describe('List actions', () => {
  it('Should create an action to get all items', (done) => {
    const apiPromise = fetchPosts();
    expect(apiPromise).to.have.property('type').to.equal(types.FETCH_LIST);
    expect(Promise.resolve(apiPromise.payload)).to.eventually.have.property('data')
    .that.is.an('array').with.deep.property('[0]')
    .to.include.keys(['id', 'title', 'body']).notify(done);
  });
});

// Reducer test
import { reducer } from './reducers';

describe('List reducer', () => {
  it('Should return the initial state (Chai.expect) ', () => {
    const initialstate = reducer(undefined, {});
    expect(initialstate).to.be.an('object').to.have.property('all').that.is.an('array').to.eql([]);
  });

  it('Should mutate the state', (done) => {
    expect(
       reducer([], {
         type: types.FETCH_LIST,
         payload: {
           data: [
             {
               userId: 1,
               id: 1,
               title: 'Titulo 1',
               body: 'Contenido 1',
             },
             {
               userId: 1,
               id: 2,
               title: 'Titulo 2',
               body: 'Contenido 2',
             },
           ],
         },
       })
     ).to.eql({
       all: [
         {
           userId: 1,
           id: 1,
           title: 'Titulo 1',
           body: 'Contenido 1',
         },
         {
           userId: 1,
           id: 2,
           title: 'Titulo 2',
           body: 'Contenido 2',
         },
       ],
     });
    done();
  });
});
