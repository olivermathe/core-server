module.exports =  {
	apps : [
		{
			name      : 'core-server',
			script    : 'server.js',
			restart   : false,
			development : {
				NODE_ENV: 'development'
			},
			env_production : {
				NODE_ENV: 'production'
			},
			env_homolog : {
				NODE_ENV: 'homolog'
			}
		}
	]
};
