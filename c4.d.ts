interface MainScreenProps {
    onClick: () => void
    children?: React.ReactElement
}

interface WebxdcPlayer {
    name: string
    addr: string
    color: string
}

interface C4ContextProps {
    game: Connect4
    playerName: string
    playerAddr: string
    moves: number[]
    setMoves: React.Dispatch<React.SetStateAction<number[]>>
    columnSelected: number
    setColumnSelected: React.Dispatch<React.SetStateAction<number>>
    activePlayer: Player
    setActivePlayer: React.Dispatch<React.SetStateAction<Player>>
    players: WebxdcPlayer[]
    setPlayers: React.Dispatch<React.SetStateAction<WebxdcPlayer[]>>
    gameArray: Player[]
    setGameArray: React.Dispatch<React.SetStateAction<Player[]>>
    won: boolean
    setWon: React.Dispatch<React.SetStateAction<boolean>>
}

interface C4Update {
    move: number
    moves: number[]
    players: WebxdcPlayer[]
}