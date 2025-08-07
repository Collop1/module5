class Logger {
  /**
   * Generate a caller ID from request information that works with any client
   * @param {Object} req - Express request object
   * @returns {string} - A caller ID based on available request details
   */
  static generateCallerId(req) {
    // Try to identify the caller using various request properties
    
    // Generate a fingerprint from request details
    const ip = req.ip || req.connection.remoteAddress || 'unknown';
    const userAgent = req.get('User-Agent') || 'unknown';
    const method = req.method;
    // Create a simple hash from these values
    const fingerprint = Buffer.from(`${ip}-${userAgent.substring(0, 30)}-${method}`).toString('base64').substring(0, 20);
    
    // For Postman or API tools, try to extract tool info
    if (userAgent.includes('Postman')) {
      return `tool:postman-${fingerprint}`;
    }
    
    // For browser requests, include origin info
    const referer = req.get('Referer') || 'direct';
    const origin = referer !== 'direct' ? new URL(referer).origin : 'unknown';
    if (origin !== 'unknown') {
      return `web:${origin}-${fingerprint}`;
    }
    
    // Fallback for any other type of request
    return `request:${fingerprint}`;
  }
  
  /**
   * Log an operation with caller ID and result
   * @param {string} callerId - ID of the caller (e.g., Calculator ID)
   * @param {string} operation - Name of the operation performed
   * @param {*} result - Result of the operation
   * @param {Object} params - Optional parameters used in the operation
   */
  static logOperation(callerId, operation, result, params = {}) {
    const timestamp = new Date().toISOString();
    const paramsStr = `${JSON.stringify(params)}`;
    
    console.log(`[${timestamp}] [${callerId}]
    Params: ${operation}${paramsStr}
    Result: ${result}
    `);
  }
}

module.exports = Logger;