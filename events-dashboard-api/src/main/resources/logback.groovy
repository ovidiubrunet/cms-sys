appender("CONSOLE", ConsoleAppender) {
    encoder(PatternLayoutEncoder) {
        pattern = "%d{HH:mm:ss.SSS} [%-5level] [%t] %logger{36} - %msg%n"
    }
}

root(DEBUG, ["CONSOLE"])
// root(Level.INFO, ["CONSOLE"])

logger('com.cegeka.eventsdashboard', DEBUG)
logger('reactor.ipc.netty', ERROR)
logger('reactor.ipc.netty', ERROR)
logger('io.netty', ERROR)
logger('org.springframework', ERROR)
logger('org.hibernate', ERROR)
logger('com.zaxxer.hikari', ERROR)