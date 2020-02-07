//AJAX : SHIM:A shim is a library that brings a new API to an older environment, using only the means of that environment.
//Deferred() A factory function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.
$.ajax = function(url, options)
{
  var response = {
    firstname :$("#firstname").val(),
    lastname :$("#lastname").val(),
    email:$("#email").val(),
    phone:$("#phone").val(),
    from:$("#from").val(),
    to:$("#to").val(),
    fromdate:$("#from_date").val(),
    todate:$("#to_date").val(),
    adults:$("#adults").val(),
    children:$("#children").val(),
    select:$('#select :selected').val()
  }
  //factory creates a new deferred object.

  var deferer = $.Deferred()

  // Simulate an api with random time for result between 400 and 2000ms
  setTimeout(function(){

    //Resolve a Deferred object and call any doneCallbacks with the given args.
    deferer.resolve(response)
  },

   Math.floor( (Math.random() * 1600) + 400 ))

  // set callbacks
  if(options.success) {
    // Add handlers to be called when the Deferred object is resolved.
    deferer.done(options.success)
  }

  if(options.error) {
    //Add handlers to be called when the Deferred object is rejected.
    deferer.fail(options.error)
  }

  //Add handlers to be called when the Deferred object is resolved.
  deferer.success = deferer.done

  //Add handlers to be called when the Deferred object is rejected.
  deferer.fail = deferer.error

  // Add handlers to be called when the Deferred object is either resolved or rejected.
  deferer.complete = deferer.always

  
  return deferer
}