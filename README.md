# PokemonDRA22

Postgres

docker run -d --name postgresql_database -e POSTGRES_USER=user -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=db -p 5432:5432 -v data:/var/lib/pgsql/data postgres