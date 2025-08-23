export function playerCount(minPlayers, maxPlayers, withLabel = false) {
    const hasRange = maxPlayers > minPlayers;
    const isMultiplayer = minPlayers > 1;

    const playerCount = hasRange ? `${minPlayers}-${maxPlayers}` : String(minPlayers);
    if (!withLabel) return playerCount;

    const label = hasRange || isMultiplayer ? 'spillere' : 'spiller';
    return `${playerCount} ${label}`;
}
