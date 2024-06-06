import { create } from 'zustand'

export const userStore = create((set) => ({
  username: "",
  point: 0,
  topPick: 0,
  isFirst: true,
  setUsername: (username) => set({ username: username }),
  settopPick: (topPick) => set({ topPick: topPick }),
  setPoint: (point) => set({ point: point }),
  setisFirst: (isFirst) => set({isFirst : isFirst}),
}))

export const womenStore = create((set) => ({
  women: [],
  setWomen: (women) => set({women:women}),
}))

export const selectStore = create((set) => ({
  name: "",
  id: 0,
  src: "",
  setName : (name) => set( { name:name} ),
  setSrc : (src) => set( {src:src} ),
}))
export const gameStore = create((set) => ({
    RoundId: 1,
    endAt: 0,
    gameStatus: [],
    setendAt: (endAt) => set({endAt : endAt}),
    setRoundId: (roundId) => set({RoundId : roundId}),
    setgamestatus: (gameStatus) => set({gameStatus : gameStatus}),
}))

export const tmpbetStore = create((set) => ({
  player:"",
  playerid: 0,
  betAmount: 1,
  setbetAmount: (betAmount) => set({betAmount : betAmount}),
  setPlayer: (player) => set({player : player}),
  setPlayerId: (playerid) => set({playerid : playerid}),
}))

export const betStore = create((set) => ({
  player:"",
  setPlayer: (player) => set({player : player}),
}))