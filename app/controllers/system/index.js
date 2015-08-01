var libQ = require('kew');
var libNet = require('net');
var libFast = require('fast.js');
var fs=require('fs-extra');
var config=new (require(__dirname+'/../../lib/config.js'))();


// Define the ControllerSystem class
module.exports = ControllerSystem;

function ControllerSystem(commandRouter) {
	var self = this;

	//getting configuration
	config.loadFile(__dirname+'/config.json');

	// Save a reference to the parent commandRouter
	self.commandRouter = commandRouter;
}

ControllerSystem.prototype.onVolumioStart = function() {
	var self = this;
	//Perform startup tasks here
}

ControllerSystem.prototype.onStart = function() {
	var self = this;
	//Perform startup tasks here
}

ControllerSystem.prototype.onStop = function() {
	var self = this;
	//Perform startup tasks here
}

ControllerSystem.prototype.onRestart = function() {
	var self = this;
	//Perform startup tasks here
}

ControllerSystem.prototype.onInstall = function()
{
	var self = this;
	//Perform your installation tasks here
}

ControllerSystem.prototype.onUninstall = function()
{
	var self = this;
	//Perform your installation tasks here
}

ControllerSystem.prototype.getUIConfig = function()
{
	var self = this;

	var uiconf=fs.readJsonSync(__dirname+'/UIConfig.json');

	return uiconf;
}

ControllerSystem.prototype.setUIConfig = function(data)
{
	var self = this;

	var uiconf=fs.readJsonSync(__dirname+'/UIConfig.json');

}

ControllerSystem.prototype.getConf = function(varName)
{
	var self = this;

	return self.config.get(varName);
}

ControllerSystem.prototype.setConf = function(varName, varValue)
{
	var self = this;

	self.config.set(varName,varValue);
}

//Optional functions exposed for making development easier and more clear
ControllerSystem.prototype.getSystemConf = function(pluginName,varName)
{
	var self = this;
	//Perform your installation tasks here
}

ControllerSystem.prototype.setSystemConf = function(pluginName,varName)
{
	var self = this;
	//Perform your installation tasks here
}

ControllerSystem.prototype.getAdditionalConf = function()
{
	var self = this;
	//Perform your installation tasks here
}

ControllerSystem.prototype.setAdditionalConf = function()
{
	var self = this;
	//Perform your installation tasks here
}