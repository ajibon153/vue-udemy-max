function getRandomValue(max, min) {
    return Math.random() * (max - min) + min
}

Vue.createApp({
    data() {
        // useState
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            battleLog: []
        }
    },
    computed: {
        // useMemo ?? reupdate component when a change
        monsterHealthBar() {
            if (this.monsterHealth <= 0) return { width: "0%" }
            return { width: this.monsterHealth + "%" }
        },
        playerHealthBar() {
            if (this.playerHealth <= 0) return { width: "0%" }
            return { width: this.playerHealth + "%" }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        // useEffect

        battleLog(value) {
            console.log("value", value)
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw"
                // draw
            } else if (value <= 0) {
                this.winner = "monster"
                //lose
            }
            // else // win
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw"
                // draw
            } else if (value <= 0) {
                this.winner = "player"
                this.monsterHealth = 0
                //lose
            }
            // else // win
        }
    },
    methods: {
        // function handlers
        attackMonster() {
            const attackValue = getRandomValue(12, 5)
            this.monsterHealth -= attackValue
            this.addLogMessage("Player", "Attack", attackValue)
            this.attackPlayer()
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(25, 10)
            this.monsterHealth -= attackValue
            this.addLogMessage("Player", "Special Attack", attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
            this.currentRound++
            const attackValue = getRandomValue(15, 8)
            this.addLogMessage("Monster", "Attack", attackValue)
            this.playerHealth -= attackValue
        },
        healPlayer() {
            this.currentRound++
            const healValue = getRandomValue(15, 8)
            if (this.playerHealth + healValue > 100) this.playerHealth = 100
            else this.playerHealth += healValue
            this.addLogMessage("Player", "Heal", healValue)
        },
        restart() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            ;(this.winner = null), (this.battleLog = [])
        },
        surrender() {
            this.winner = "monster"
        },
        addLogMessage(who, what, value) {
            this.battleLog.unshift({ who, what, value })
            // this.battleLog.unshift(who + " " + what + " " + value)
        }
    }
}).mount("#game")
