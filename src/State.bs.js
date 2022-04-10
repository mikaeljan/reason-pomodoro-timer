'use strict';


function reducer(state, action) {
  if (typeof action === "number") {
    switch (action) {
      case /* Start */0 :
          return {
                  seconds: state.seconds,
                  isTicking: true,
                  workTime: state.workTime,
                  playTime: state.playTime,
                  currentPhase: state.currentPhase
                };
      case /* Stop */1 :
          return {
                  seconds: state.seconds,
                  isTicking: false,
                  workTime: state.workTime,
                  playTime: state.playTime,
                  currentPhase: state.currentPhase
                };
      case /* Reset */2 :
          var match = state.currentPhase;
          if (match) {
            return {
                    seconds: Math.imul(state.playTime, 60),
                    isTicking: state.isTicking,
                    workTime: state.workTime,
                    playTime: state.playTime,
                    currentPhase: state.currentPhase
                  };
          } else {
            return {
                    seconds: Math.imul(state.workTime, 60),
                    isTicking: state.isTicking,
                    workTime: state.workTime,
                    playTime: state.playTime,
                    currentPhase: state.currentPhase
                  };
          }
      case /* Tick */3 :
          if (state.isTicking && state.seconds > 0) {
            return {
                    seconds: state.seconds - 1 | 0,
                    isTicking: state.isTicking,
                    workTime: state.workTime,
                    playTime: state.playTime,
                    currentPhase: state.currentPhase
                  };
          } else {
            return state;
          }
      case /* TogglePhase */4 :
          var match$1 = state.currentPhase;
          if (match$1) {
            return {
                    seconds: Math.imul(state.workTime, 60),
                    isTicking: true,
                    workTime: state.workTime,
                    playTime: state.playTime,
                    currentPhase: /* Work */0
                  };
          } else {
            return {
                    seconds: Math.imul(state.playTime, 60),
                    isTicking: true,
                    workTime: state.workTime,
                    playTime: state.playTime,
                    currentPhase: /* Play */1
                  };
          }
      
    }
  } else {
    var i = action._1;
    if (action._0) {
      return {
              seconds: state.seconds,
              isTicking: state.isTicking,
              workTime: state.workTime,
              playTime: i,
              currentPhase: state.currentPhase
            };
    } else {
      return {
              seconds: state.seconds,
              isTicking: state.isTicking,
              workTime: i,
              playTime: state.playTime,
              currentPhase: state.currentPhase
            };
    }
  }
}

var initialState = {
  seconds: 0,
  isTicking: false,
  workTime: 25,
  playTime: 5,
  currentPhase: /* Work */0
};

exports.initialState = initialState;
exports.reducer = reducer;
/* No side effect */
